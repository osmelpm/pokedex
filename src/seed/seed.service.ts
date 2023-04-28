import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { catchError, firstValueFrom } from 'rxjs';
import { APIResponse } from './interfaces/pokeResponse.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    const pokemonsToInsert = [];
    const { data } = await firstValueFrom(
      this.httpService
        .get<APIResponse>('https://pokeapi.co/api/v2/pokemon/?limit=650')
        .pipe(
          catchError((err) => {
            console.log(err.response);
            throw new InternalServerErrorException(
              'Seed failed - check the logs',
            );
          }),
        ),
    );

    await this.pokemonModel.deleteMany({});

    for (const pokemon of data.results) {
      const { name, url } = pokemon;
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      pokemonsToInsert.push({
        name,
        no,
      });
    }

    await this.pokemonModel.insertMany(pokemonsToInsert);

    return 'Seed executed';
  }
}

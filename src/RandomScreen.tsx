import * as React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import GLOBAL_STYLES from './globalStyles';
import { IPokemon } from './pokemon';
import PokemonRenderFunction from './PokemonRenderFunction';

interface State {
  pokemon: IPokemon;
  refreshing: boolean;
}

export default class extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: basicState,
      refreshing: false,
    };
    this._onRefresh = this._onRefresh.bind(this);
  }
  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const pokemon = Math.floor(Math.random() * Math.floor(385));
    const respone = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon + 1}`
    );
    const Json = await respone.json();
    this.setState({ pokemon: Json });
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={GLOBAL_STYLES.mainContainer}>
          <Text style={GLOBAL_STYLES.headerText}>Random Pokemon Generator</Text>
          <PokemonRenderFunction {...this.state.pokemon} />
        </View>
      </ScrollView>
    );
  }
}

const basicState: IPokemon = {
  id: 1,
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  is_default: true,
  order: 1,
  weight: 69,
  abilities: [
    {
      is_hidden: true,
      slot: 3,
      ability: {
        name: 'chlorophyll',
        url: 'http://pokeapi.co/api/v2/ability/34/',
      },
    },
  ],
  forms: [
    {
      name: 'bulbasaur',
      url: 'http://pokeapi.co/api/v2/pokemon-form/1/',
    },
  ],
  game_indices: [
    {
      game_index: 1,
      version: {
        name: 'white-2',
        url: 'http://pokeapi.co/api/v2/version/22/',
      },
    },
  ],
  held_items: [],
  location_area_encounters: [],
  moves: [
    {
      move: {
        name: 'captivate',
        url: 'http://pokeapi.co/api/v2/move/445/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'http://pokeapi.co/api/v2/version-group/10/',
          },
          move_learn_method: {
            name: 'machine',
            url: 'http://pokeapi.co/api/v2/move-learn-method/4/',
          },
        },
        {
          level_learned_at: 0,
          version_group: {
            name: 'platinum',
            url: 'http://pokeapi.co/api/v2/version-group/9/',
          },
          move_learn_method: {
            name: 'machine',
            url: 'http://pokeapi.co/api/v2/move-learn-method/4/',
          },
        },
        {
          level_learned_at: 0,
          version_group: {
            name: 'diamond-pearl',
            url: 'http://pokeapi.co/api/v2/version-group/8/',
          },
          move_learn_method: {
            name: 'machine',
            url: 'http://pokeapi.co/api/v2/move-learn-method/4/',
          },
        },
      ],
    },
  ],
  species: {
    name: 'bulbasaur',
    url: 'http://pokeapi.co/api/v2/pokemon-species/1/',
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'http://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'http://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
};

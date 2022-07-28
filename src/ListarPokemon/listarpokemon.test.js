import renderer from 'react-test-renderer';
import ListarPokemon from './ListarPokemon';

describe('Pruebas unitarias del componente Pokemon', () => {
    it('deberia renderizar el componente sin error', () => {
        const tree = renderer.create(<ListarPokemon />);
        expect(tree).toBeTruthy();
    })

}); // prueba passed
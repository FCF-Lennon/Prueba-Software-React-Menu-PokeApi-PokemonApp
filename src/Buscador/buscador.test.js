import renderer from 'react-test-renderer';
import Buscador from './Buscador';

describe ('Pruebas unitarias al componente buscador', () => {
    it('Comprueba que el elemento Buscador este siendo renderizado ', () => {
        const tree = renderer.create(<Buscador />);
        expect(tree).toBeTruthy();
    })
}); // la prueba es correcta



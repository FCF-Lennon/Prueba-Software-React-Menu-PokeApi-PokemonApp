import renderer from 'react-test-renderer';
import BuscadorCombate from './BuscadorCombate';

describe ('Pruebas unitarias al componente buscadorCombate', () => {

    it('Comprueba que el elemento BuscadorCombate se este renderizando correctamente', () => {
        const tree = renderer.create(<BuscadorCombate />);
        expect(tree).toBeTruthy();
    })
}); // la prueba es correcta
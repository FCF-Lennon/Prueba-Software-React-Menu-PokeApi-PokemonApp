import renderer from 'react-test-renderer';
import Pokemon from './pokemon';

describe('Pruebas unitaria del componente Pokemon', () => {
    it('deberia renderizar correctamente', () => {
        const tree = renderer.create(<Pokemon />);
        expect(tree).toBeTruthy();
    });

    it('deberia renderizar correctamente el componente con el pokemon', () => {
        const nombre = 'pikachu';
        const tree = renderer.create(<Pokemon nombre={nombre} />);
        expect(tree).toBeTruthy();
    })
}); // prueba passed


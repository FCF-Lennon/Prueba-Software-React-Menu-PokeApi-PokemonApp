import renderer from 'react-test-renderer';
import Tarjetas from './Tarjetas';

describe ('Pruebas Unitarias modulo Tarjetas', () => {
    it('deberia renderizar correctamente', () => {
        const tree = renderer.create(<Tarjetas />);
        expect(tree).toBeTruthy();
    });
});

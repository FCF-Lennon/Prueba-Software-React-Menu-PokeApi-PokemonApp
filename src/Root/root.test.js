import renderer from 'react-test-renderer';
import Root from './Root';

describe('Pruebas unitarias componente Root', () => {
    it('deberia renderizar el modulo sin error', () => {
        const tree = renderer.create(<Root />);
        expect(tree).toBeTruthy();
    });

}); // prueba passed
import renderer from 'react-test-renderer';
import Index from './index';

describe ('Pruebas unitarias modulo index', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Index />);
        expect(tree).toBeTruthy();
    }
    );
}); // prueba fail createRoot(...) porque el contenedor de destino no es 
// un elemento DOM
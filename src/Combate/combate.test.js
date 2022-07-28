import renderer from 'react-test-renderer';
import Combate from './Combate';

describe ('Pruebas unitarias al componente combate', () => {
    it('deberia comprobar que el renderizado este correcto', () => {
        const tree = renderer.create(<Combate />);
        expect(tree).toBeTruthy();
    })
}) 

// la prueba es correcta y el componente se esta renderizando correctamente 
// pero el componente buscador no se esta renderizando correctamente



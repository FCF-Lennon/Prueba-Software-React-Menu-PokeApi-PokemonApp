import renderer from 'react-test-renderer'; 
import Button from './Button';

describe('Pruebas unitarias al componente button', () => {
    it('deberia comprobar que el renderizado este correcto', () => {
        const tree = renderer.create(<Button />);
        expect(tree).toBeTruthy();
    }) // prueba correcta 

    it('deberia comprobar que el rederizado este correto con props', () => {
        const tree = renderer.create(<Button name="test" className="test" disabled={true} onClick={() => {}}/>);
        expect(tree).toBeTruthy();
    }) // prueba correcta

})






import Input from './Input';
import renderer from 'react-test-renderer'; 

describe('Pruebas unitarias al componente Input', () => {
    it('deberia comprobar el renderizado del componente', () => {
        const tree = renderer.create(<Input />);
        expect(tree).toBeTruthy();
    }) // prueba Passed

    it('deberia comprobar el renderizado del compornente con props', () => {
        const tree = renderer.create(<Input name="test"       />);
        expect(tree).toBeTruthy();
    }) // prueba Passed
})



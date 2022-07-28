import renderer from 'react-test-renderer';
import { FetchDataOne } from './FetchDataOne';

describe('Pruebas unitarias al componente FetchDataOne', () => {
    it('No deberia renderizar dando como resultado Fail', () => {
        const tree = renderer.create(<FetchDataOne />);
        expect(tree).toBeTruthy();
    })
}); // prueba Fail, no deberia renderizar la funciion async  FetchDataOne() 
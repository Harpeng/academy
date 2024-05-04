import './index.css';
import { accordion } from '../utils/constants';
import { textDown} from '../components/accordion';

accordion.forEach(title => {
    title.addEventListener('click', textDown)
});
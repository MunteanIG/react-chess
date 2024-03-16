import './Files.css';
import { getChar } from '../../../helper';

//Displays the files
const Files = ({files}) => {
    return <div className="files">
        {files.map(file=> <span key={file}> {getChar(file)}</span>)}
    </div>
}

export default Files;
import { Avatar } from 'components/Avatar';
import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { RadioButton } from 'components/RadioButton';
import './App.css';

function App() {
  return (
    <div>
      {/* <Avatar firstname="Olha" lastname="Shcherbakova" size="sm" />
      <br />
      <Avatar firstname="Olha" lastname="Shcherbakova" size="md" />
      <br />
      <Avatar firstname="Olha" lastname="Shcherbakova" size="lg" /> */}
      <br />
    {/* <Input type={"text"} placeholder={"Email"} value={""} /> */}
      <br />
      <Checkbox id={"1"} name={'test'} />
      <Checkbox id={"2"} name={'test'} /> 
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

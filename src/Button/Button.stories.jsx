import {Button} from './Button';
import './button.css';
export default {
    title: 'Button',
    component: Button,
}
const Template = (arg) => <Button{...arg}/>
export const Default = Template.bind({});


Default.args = {
    type : 'solid',
    size : 'medium',
    style : 'primary',
    iconType : 'none',
    state : 'default',

};
import {Button} from './Button';
import './button.css';
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        type:{
            type: 'string',
            description: 'Set visual type of a button',
            defaultValue: 'solid',
            options: ['solid', 'outline', 'soft', 'ghost'],
            control: {
                type: 'radio',
            }
        },
        size:{
            type: 'string',
            description: 'Set size of a button',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            }
        },
        style:{
            type: 'string',
            description: 'Set visual style of a button',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'danger'],
            control: {
                type: 'radio',
            }
        },
        iconType:{
            type: 'string',
            description: 'Affects button paddings',
            defaultValue: 'none',
            options: ['none', 'leading', 'trailing', 'leadingTrailing', 'standalone'],
            control: {
                type: 'radio',
            }
        },
        state:{
            type: 'string',
            description: 'Set current state of a button',
            defaultValue: 'solid',
            options: ['default', 'hover', 'disabled'],
            control: {
                type: 'radio',
            }
        }
    },
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

export const Large = Template.bind({});


Large.args = {
    type : 'solid',
    size : 'large',
    style : 'danger',
    iconType : 'none',
    state : 'default',

};
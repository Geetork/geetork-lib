import { PropsWithChildren } from 'react';
import { IconPlus, IconBrackets} from '@codexteam/icons';
import SVG from 'react-inlinesvg';
import './button.css';

export interface IButton {
    onClick?: () => void;
    type?: 'solid' | 'outline' | 'soft' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    style?: 'primary' | 'secondary' | 'danger';
    iconType?: 'none' | 'leading' | 'trailing' | 'leadingTrailer' | 'standalone';
    disabled?: boolean;
};

const Button: React.FC<PropsWithChildren<IButton>> = (props) => {
    const type = props.type ? `button__type_${props.type}` : 'button__type_solid';
    const style = props.style ? `button__style_${props.style}` : 'button__style_primary';
    const size = props.size ? `button__size_${props.size}` : 'button__size_medium';
    const iconType = props.iconType ? `button__icon_${props.iconType}` : 'none';
    const disabled = props.disabled ? `button__disabled` : '';

    return (
        <div onClick={props.onClick} 
             className={`button button__content ${type} ${style} ${size} ${iconType} ${disabled}`}>
            {   
                props.iconType 
                    && ['leading', 'leadingTrailing', 'standalone'].includes(props.iconType)
                    && <SVG src={IconPlus} className='icon'/>
            }
            {
                props.children 
                    && props.iconType !== 'standalone' ?
                        <span>{props.children}</span> : null
            }

            {
                props.iconType
                    && ['trailing', 'leadingTrailing'].includes(props.iconType)
                    && <SVG src={IconBrackets} className='icon icon__brackets'/>
            }
        </div>
    )
};

export default Button;
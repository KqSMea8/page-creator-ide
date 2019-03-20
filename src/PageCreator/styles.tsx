import styled from 'styled-components';
import { desaturate } from 'polished';
import { IPageCreatorProps } from './index';

interface IStyledProps extends IPageCreatorProps {
  style?: React.CSSProperties;
  className?: string;
  [prop: string]: any;
}

export const StyledContainer = styled.div.attrs({
  style: (props: IStyledProps) => props.style || {} // 优先级会高一些，行内样式
})`
  background: ${(props: IStyledProps) => props.theme.bgColor};
  height: 100vh;

  .Resizer {
    background: #333;
    opacity: 0.2;
    z-index: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
  }

  .Resizer:hover {
    -webkit-transition: all 2s ease;
    transition: all 2s ease;
  }

  .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
    cursor: row-resize;
    width: 100%;
  }

  .Resizer.horizontal:hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
  }

  .Resizer.vertical:hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .Resizer.disabled {
    cursor: inherit;
  }
  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;



export const StyledComponentTreeWrap = styled.div.attrs({
  style: (props: IStyledProps) => props.style || {} // 优先级会高一些，行内样式
})`
  background-color: white;
  overflow: scroll;
  width: 100%;
  height: 100%;
`;

export const StyledSwitchPanelWrap = styled.div.attrs({
  style: (props: IStyledProps) => props.style || {} // 优先级会高一些，行内样式
})`
  background-color: white;
  width: 100%;
  height: 100%;
`;

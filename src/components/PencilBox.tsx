import styled from 'styled-components';

export const PencilBorder = styled.div`
  border-style: solid;
  border-width: 5px 5px 5px 5px;
  -moz-border-image: url('/assets/images/background/line.png') 24 100 72 93
    stretch;
  -webkit-border-image: url('/assets/images/background/line.png') 24 3100 72 93
    stretch;
  -o-border-image: url('/assets/images/background/line.png') 24 100 72 93
    stretch;
  border-image: url('/assets/images/background/line.png') 24 100 72 93 stretch;
`;

export const PencilBorderBottom = styled.div`
  border-style: solid;
  border-width: 0px 0px 5px 0px;
  -moz-border-image: url('/assets/images/background/line.png') 24 39 72 93
    stretch;
  -webkit-border-image: url('/assets/images/background/line.png') 24 39 72 93
    stretch;
  -o-border-image: url('/assets/images/background/line.png') 24 39 72 93 stretch;
  border-image: url('/assets/images/background/line.png') 24 39 72 93 stretch;
`;

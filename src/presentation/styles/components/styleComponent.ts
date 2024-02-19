import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${props => props.theme.backgroud.primary};
`;

export const LinkPrimary = styled.a`
  color: ${props => props.theme.colors.primary};
`;

export const LinkSecondary = styled.a`
  color: ${props => props.theme.colors.secondary};
`;

export const LinkWarning = styled.a`
  color: ${props => props.theme.colors.warning};
`;
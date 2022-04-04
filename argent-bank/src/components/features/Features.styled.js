import styled from 'styled-components';
import { devices } from '../styles/MediaQueries';

const StyledFeatures = styled.section`
  display: flex;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export default StyledFeatures;

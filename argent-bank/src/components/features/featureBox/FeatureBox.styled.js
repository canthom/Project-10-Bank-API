import styled from 'styled-components';
import { devices } from '../../styles/MediaQueries';

const StyledFeatureBox = styled.div`
  flex: 1;
  padding: 2.5rem;

  img {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }

  h3 {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export default StyledFeatureBox;

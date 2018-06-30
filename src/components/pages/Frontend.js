import React from 'react';
import Headers from '../wrapper/Headers';
import Content from '../wrapper/Content';
import Footer from '../wrapper/Footer';
import {Segment,Header,List,Image,Grid,Container} from 'semantic-ui-react';

class Frontend extends React.Component {
  componentDidMount(){
    document.title = "Tunaiku"
  }
  render() {
    return(
      <div>
        <Headers>...</Headers>
        <Content>...</Content>
        <Footer>...</Footer>
      </div>
    );
  }
}
export default Frontend;

import React from 'react';
import Headers from '../wrapper/Headers';
import Content from '../wrapper/Content';
import {Segment,Header,List,Menu,Image,Dropdown,Button,Grid,Container,Input} from 'semantic-ui-react';

class Frontend extends React.Component {
  componentDidMount(){
    document.title = "Tunaiku"
  }
  render() {
    return(
      <div>
        <Headers>...</Headers>
        <Content>...</Content>
        <div className='footer'>
          <Segment inverted vertical style={{ padding: '5em 0em',background:'#2d4452' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h2' content='Front-end' />
                    <p>magnamaliquamquaeratvoluptatem.Utenim
                      adminimaveniam,quisnostrumexercitationem
                      ullamcorporis
                    </p>
                  </Grid.Column>
                  <Grid.Column width={13} textAlign='right'>
                    <List horizontal relaxed>
                      <List.Item >Menu 1</List.Item>
                      <List.Item >Menu 2</List.Item>
                      <List.Item >Menu 3</List.Item>
                      <List.Item >Menu 4</List.Item>
                    </List>
                    <br /><br />
                    <List horizontal relaxed>
                      <List.Item ><Image src={require('../assets/icon-facebook.png')}/></List.Item>
                      <List.Item ><Image src={require('../assets/icon-twitter.png')}/></List.Item>
                      <List.Item ><Image src={require('../assets/icon-instagram.png')}/></List.Item>
                      <List.Item ><Image src={require('../assets/icon-youtube.png')}/></List.Item>
                    </List>
                    <br /><br />
                    <p>magnamaliquamquaeratvoluptatem.Utenim</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}
export default Frontend;

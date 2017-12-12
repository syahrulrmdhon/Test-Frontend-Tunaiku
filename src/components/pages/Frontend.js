import React from 'react';
import {Segment,Header,List,Menu,Image,Dropdown,Button,Grid,Container,Input} from 'semantic-ui-react';

class Frontend extends React.Component {
  render() {
    return(
      <div>
        <div className='head'>
          <style>{`
              body > div,
              body > div > div,
              body > div > div > div.head {
              height: 90%;
              }
          `  }
          </style>
          <Segment attached style={{border:'none',background:'#2d4452'}}>
            <List horizontal relaxed>
              <List.Item>
                <Image style={{margin:'0 0 0 60px'}} src={require('../assets/logo.png')}/>
              </List.Item>
              <List.Item>
                <Header as='h2' style={{margin:'0 0 0 550px',color:'#FFF'}}>
                </Header>
              </List.Item>
              <List.Item>
                <Menu style={{border:'none',background:'#2d4452'}} >
                  <Menu.Item
                    name='Menu 1'
                    style={{color:'#FFF'}}
                  />
                  <Menu.Item
                    name='Menu 2'
                    style={{color:'#FFF'}}
                  />
                  <Menu.Item>
                    <Dropdown item text='Menu 3' style={{color:'#FFF'}}>
                      <Dropdown.Menu>
                        <Dropdown.Item>Sub-menu-3-number 1</Dropdown.Item>
                        <Dropdown.Item>Sub-menu-3-2</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Item>
                  <Menu.Item
                    name='Menu 4'
                    style={{color:'#FFF'}}
                  />
                  <Menu.Item>
                    <Image src={require('../assets/icon-search.png')}/>
                  </Menu.Item>
                </Menu>
              </List.Item>
            </List>
          </Segment>
        </div>
        <div className='atas'>
        <style>{`
            .besar {
            font-size: 54px;
            margin:0 0 0 50px;
            }
            .kecil{
              margin:0 0 0 50px;
            }
            .button-info{
              margin:20px 0 0 50px;
            }
        `  }
        </style>
          <Segment attached style={{border:'none',background:'#f2f2f2'}}>
            <Segment attached style={{border:'none',background:'#f2f2f2'}}>
              <List horizontal relaxed>
                <List.Item>
                  <p className='besar'>
                      Loremipsumdolorsit
                  </p>
                  <p className='besar'>
                      amet,consecteturadipi
                  </p>
                  <p className='besar'>
                      scingelit,seddo
                  </p>
                  <p className='kecil'>
                    eiusmodtemporincididuntutlaboreetdoloremagna
                  </p>
                  <p className='kecil'>
                    aliqua.Utenimadminimveniam,quisnostrud
                  </p>
                  <p className='button-info'>
                    <Button style={{background:'#2d4452',color:'#FFF'}}>
                      For More Information
                    </Button>
                  </p>
                </List.Item>
                <List.Item>
                  <Header style={{margin:'0 0 0 190px'}} >
                  </Header>
                </List.Item>
                <List.Item>
                  <Image src={require('../assets/section-1-image01.png')}/>
                </List.Item>
              </List>
            </Segment>
          </Segment>
        </div>
        <style>{`
            .tengah{
              margin:20px 0 0 0;
            }
            .judul-tengah{
              text-align: center;
              font-size: 54px;
            }
            .content-tengah{
              text-align: center;
              font-size: 14px;
              max-width: 100px;
            }
        `  }
        </style>
        <div className='tengah'>
          <Segment attached style={{border:'none',background:'#FFF'}}>
            <p className='judul-tengah'>
              CupidatatNonProidentSunt
            </p>
            <Segment attached style={{border:'none',background:'#FFF'}} textAlign='center' >
              <List horizontal relaxed>
                <List.Item >
                  <Header as='h1' icon>
                    <Image src={require('../assets/section-2-image01.png')}/>
                    <Header.Content>
                      Excepteursintoccaecat
                    </Header.Content>
                  </Header>
                  <p className='content-tengah'>
                    laborisnisiutaliquipexeacommodoconsequat.
                    iruredolorinreprehenderitinvoluptate
                    doloreeufugiatnullapariatur.
                  </p>
                </List.Item>
                <List.Item style={{margin:'0 0 0 180px'}}>
                  <Header as='h1' icon>
                    <Image src={require('../assets/section-2-image02.png')}/>
                    <Header.Content>
                      Nemoenimipsam
                    </Header.Content>
                  </Header>
                  <p className='content-tengah'>
                    quirationevoluptatemsequinesciunt.Nequeporro
                    quisquamest,quidoloremipsumquiadolor
                    sitamet,consectetur,adipiscivelit,
                  </p>
                </List.Item>
                <List.Item style={{margin:'0 0 0 180px'}}>
                  <Header as='h1' icon>
                    <Image src={require('../assets/section-2-image03.png')}/>
                    <Header.Content >
                      Quisautemveleum
                    </Header.Content>
                  </Header>
                  <p className='content-tengah'>
                      magnamaliquamquaeratvoluptatem.Utenim
                      adminimaveniam,quisnostrumexercitationem
                      ullamcorporis
                  </p>
                </List.Item>
              </List>
            </Segment>
          </Segment>
          <br /><br /><br /><br /><br /><br />
        </div>
        <style>{`
            .judul-email{
              text-align: center;
              font-size: 54px;
            }
        `  }
        </style>
        <div className='email'>
          <Segment attached style={{border:'none',background:'#f2f2f2'}} textAlign='center'>
            <p className='judul-tengah'>
              Quisnostrumexercitationemullamcorporis
              suscipitlaboriosasimu,nisiutaliquid?
            </p>
                <Input size='massive' placeholder='front-end@tunaiku.com'/>
                <Button size='massive' color='vk' content='SEND' />
                <br /><br /><br /><br /><br />
          </Segment>
        </div>
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

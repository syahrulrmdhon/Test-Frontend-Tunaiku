import React from 'react';
import {Segment,Header,List,Menu,Image,Dropdown,Container,Input,Button} from 'semantic-ui-react';

class Content extends React.Component {
    render() {
      return(
        <div>
        <div style={{ marginTop: '4em' }} className='atas'>
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
        </div>
      )
    }
}

export default Content;
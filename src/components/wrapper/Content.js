import React from 'react';
import {Segment,Header,List,Image,Input,Button,Grid,Container} from 'semantic-ui-react';

class Content extends React.Component {
    render() {
      return(
        <div style={{background:'#f2f2f2' }}>
        <Container>
         <Grid divided='vertically' style={{ marginTop: '5em',background:'#f2f2f2' }} >
          <Grid.Row columns={2}>
            <Grid.Column stackable style={{padding:'20px'}}>
            <Segment basic>
              <p className='h1'>Loremipsumdolorsit amet,consecteturadipi scingelit,seddo</p>
              <p>amet,consecteturadipi scingelit,seddo eiusmodtemporincididuntutlaboreetdoloremagna aliqua.Utenimadminimveniam,quisnostrud</p>
                <Button style={{background:'#2d4452',color:'#FFF'}}>
                    For More Information
                </Button>
              </Segment>
              </Grid.Column>
            <Grid.Column >
              <Image style={{padding:'40px',margin:'20px'}} src={require('../assets/section-1-image01.png')}/>
            </Grid.Column>
          </Grid.Row>
         </Grid>
         </Container>
        <style>{`
            .h1 {
              font-size: 54px;
              margin: 0;
            }
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
              display: -webkit-box;
            }
        `  }
        </style>
        <div className='tengah'>
          <Segment attached style={{border:'none',background:'#FFF'}}>
            <p className='judul-tengah'>
              CupidatatNonProidentSunt
            </p>
            <Segment attached style={{border:'none',background:'#FFF'}} textAlign='center' >
              <Container>
                <Grid divided='vertically' >
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Image style={{display:'initial'}} src={require('../assets/section-2-image01.png')}/>
                      <Header>
                          Excepteursintoccaecat
                      </Header>
                      <p className='content-tengah'>
                        laborisnisiutaliquipexeacommodoconsequat.
                        iruredolorinreprehenderitinvoluptate
                        doloreeufugiatnullapariatur.
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      <Image style={{display:'initial'}} src={require('../assets/section-2-image02.png')}/>
                      <Header>
                          Nemoenimipsam
                      </Header>
                      <p className='content-tengah'>
                        quirationevoluptatemsequinesciunt.Nequeporro
                        quisquamest,quidoloremipsumquiadolor
                        sitamet,consectetur,adipiscivelit,
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      <Image style={{display:'initial'}} src={require('../assets/section-2-image03.png')}/>
                      <Header>
                          Quisautemveleum
                      </Header>
                      <p className='content-tengah'>
                          magnamaliquamquaeratvoluptatem.Utenim
                          adminimaveniam,quisnostrumexercitationem
                          ullamcorporis
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </Segment>
        </div>
        <style>{`
            .judul-email{
              text-align: center;
              font-size: 54px;
            }
        `  }
        </style>
        <div className='email'>
          <Segment attached style={{border:'none',background:'#f2f2f2',paddingTop: '5em'}} textAlign='center'>
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
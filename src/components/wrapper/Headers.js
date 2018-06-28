import React from 'react';
import {Menu,Image,Dropdown,Container,Input} from 'semantic-ui-react';

class Headers extends React.Component {
    render() {
      return(
        <div className='head'>
            <Menu borderless fixed='top' style={{height:'70px',background:'#2d4452'}} inverted>
                    <Container>
                        <Menu.Item as='a' header>
                        <Image
                            size='mini'
                            src={require('../assets/logo.png')}
                            style={{ width:'auto',marginRight: '1.5em' }}
                        />
                        </Menu.Item>
                        <Menu.Item position='right' as='a'>Home</Menu.Item>

                        <Dropdown item simple text='Dropdown' position='right'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Submenu</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item simple text='Dropdown' position='right'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Submenu</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>

                         <Menu.Item >
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Container>
                 </Menu>
        </div>
      )
    }
}

export default Headers;
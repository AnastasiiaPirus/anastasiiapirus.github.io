import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'
import Resume from '../../documents/AnastasiiaPirusResume.pdf'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="tools" onClick={toggle}>Tools</SidebarLink>                    
                    <SidebarLink to="contacts" onClick={toggle}>Contact Me</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={Resume} target="_blank" download exact = "true">Download CV</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
import React from 'react';
import { useGlobalContext } from './Context';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data.js';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    // Handle click event to close the sidebar
    const handleCloseSidebar = () => {
        closeSidebar();
    };

    return (
        <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar-container">
                <button className='close-btn' onClick={handleCloseSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((item) => {
                        const {links, page, pageId} = item;
                        return <article key={pageId}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((link)=>{
                                    const {url, label, id} = link;
                                    return (
                                        <a key={id} href={url}>
                                            {label}
                                            
                                        </a>
                                    )
                                })}
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

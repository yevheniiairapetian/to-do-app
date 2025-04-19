import Accordion from 'react-bootstrap/Accordion';
import './../../../src/index.css';

export const Accordions = () => {

// Check if it's the user's first visit
const isFirstVisit = localStorage.getItem('visited') === null;

// Set `visited` flag in localStorage after first visit
if (isFirstVisit) {
    localStorage.setItem('visited', 'true');
}

    return (

        
        <Accordion defaultActiveKey={isFirstVisit ? "0" : null}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Desktop or
                    laptop
                    devices:</Accordion.Header>
                <Accordion.Body>
                    <h6>User set-up</h6>
                    <ul className='accordion-ul'>
                        <li>To change the <strong>username</strong> after initial set up, click on the username in the top right of the navigation, enter a new username, then click anywhere in the app.</li>
                    <li>Click the <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"><path d="M4 20h16v2H4zM4.293 16.293l11.293-11.293 3.414 3.414-11.293 11.293H4v-3.414zM19.707 6.293l-3.414-3.414 1.414-1.414 3.414 3.414z" fill="currentColor"/></svg> icon near the profile image to delete your <strong>profile image</strong>.</li>
                    
                    </ul>
                    <h6>Working with lists</h6>
<ul className='accordion-ul'>
<li> Click on the <strong>"Add a New List"</strong> button to create a clean list of To-dos.</li>
<li>Type in the To-do and click on the <strong>"Add a to-do"</strong> button or press on <strong>"Enter"</strong> key.</li>
                    <li><strong> Long-click</strong> to mark a to-do off and click on the <strong>"X"</strong> at the end of each item to delete an
                    item.</li>
                    <li>If you want to delete all
                    to-dos at once click the <strong> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg></strong> button.</li>
                    <li> Click the
                    <strong> <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m20 18h6v2h-6z" transform="matrix(-1 0 0 -1 46 38)"/><path d="m24 26h6v2h-6z" transform="matrix(-1 0 0 -1 54 54)"/><path d="m22 22h6v2h-6z" transform="matrix(-1 0 0 -1 50 46)"/><path d="m17.0029 20a4.8952 4.8952 0 0 0 -2.4044-4.1729l7.4015-12.8271-1.7309-1-7.5758 13.126a5.6988 5.6988 0 0 0 -5.2433 1.5029c-3.7436 3.6111-3.4537 12.0532-3.44 12.4111a1 1 0 0 0 1 .96h14.9912a1 1 0 0 0 .6-1.8c-3.5397-2.6561-3.5983-8.1463-3.5983-8.2zm-5.0729-3.0029a3.11 3.11 0 0 1 3.0741 3.0029c0 .0381.0019.208.0168.4688l-5.8994-2.6236a3.8 3.8 0 0 1 2.8085-.8481zm3.5194 11.0029a5.2 5.2 0 0 1 -1.4494-3h-2a6.4993 6.4993 0 0 0 .9684 3h-2.2233a16.6166 16.6166 0 0 1 -.7451-4h-2a17.3424 17.3424 0 0 0 .6652 4h-2.6652c.031-1.8364.29-5.8921 1.8027-8.5527l7.533 3.35a13.0253 13.0253 0 0 0 2.2611 5.2027z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></strong> button to clean up the input field.</li>
                    <li>Click on the <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"><path d="M4 20h16v2H4zM4.293 16.293l11.293-11.293 3.414 3.414-11.293 11.293H4v-3.414zM19.707 6.293l-3.414-3.414 1.414-1.414 3.414 3.414z" fill="currentColor"/></svg> icon in every to-do item to edit it. Then click on the icon again or hit <strong>"Enter"</strong> to save.</li>
                    <li>Click on the <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> icon to <strong>clone and paste</strong> the to-do in the current list</li>
                    <li>To search for lists / to-dos, type in the list name / to-do text in the <strong>search field</strong>. Clear your search to restore.</li>
                    <li><strong>Drag</strong> to-dos in the lists to re-order them and drop to-dos between lists</li>
                    <li><strong>Drag</strong> the lists to re-order them</li>
                    <li>Click on <strong>"X"</strong> at the top right
                    to delete the whole list.</li>
                    <li>All edits are <span className='primary-to-do-color'><strong>automatically</strong></span> saved to the browser storage. </li>
</ul>

<h6>Changing list layout (<strong>desktop only</strong>)</h6>
<ul className='accordion-ul'>
<li>Click on either the <svg width="24" height="30"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g fill="#231f20"><path d="m20 5a1 1 0 0 0 -1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.29v2.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="m10.71 13.29a1 1 0 0 0 -1.42 0l-3.29 3.28v-2.57a1 1 0 0 0 -1-1 1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-2.58l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></svg> or <svg width="24" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g fill="#231f20"><path d="m19 9h-2.58l3.29-3.29a1 1 0 1 0 -1.42-1.42l-3.29 3.28v-2.57a1 1 0 0 0 -1-1 1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="m10 13h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.29v2.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0 -1-1z"/></g></svg> icon just below the <strong>"Add a New List"</strong> button to toggle the lists layout. <strong>Expand</strong> to make each list take up a whole row space, <strong>collapse</strong> to make the lists take up 1/3 of the row. </li>

</ul>
<h6>Deleting your data</h6>

                    <ul className='accordion-ul'>

                    
                    
                    <li>To delete all your data and reset the app, click on the <strong>Reset the app</strong> button in the bottom-right of the screen (<strong>note that this action is permanent</strong>).</li>
                    
                    </ul>
                      
                        
                     
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Touch screen
                    devices:</Accordion.Header>
                <Accordion.Body>
                <h6>User set-up</h6>
                    <ul className='accordion-ul'>
                        <li>To change the <strong>username</strong> after initial set up, tap on the username in the top right of the navigation, enter a new username, then tap anywhere in the app.</li>
                    <li>Tap on the <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"><path d="M4 20h16v2H4zM4.293 16.293l11.293-11.293 3.414 3.414-11.293 11.293H4v-3.414zM19.707 6.293l-3.414-3.414 1.414-1.414 3.414 3.414z" fill="currentColor"/></svg> icon near the profile image to delete your <strong>profile image</strong>.</li>
                    
                    </ul>
                    <h6>Working with lists</h6>
<ul className='accordion-ul'>
<li> Tap on the <strong>"Add a New List"</strong> button to create a clean list of To-dos.</li>
<li>Type in the To-do and tap on the <strong>"Add a to-do"</strong> button or press on <strong>"Enter"</strong> key.</li>
                    <li><strong> Long-tap</strong> to mark a to-do off and tap on the <strong>"X"</strong> at the end of each item to delete an
                    item.</li>
                    <li>If you want to delete all
                    to-dos at once tap the <strong> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg></strong> button.</li>
                    <li> Tap on the
                    <strong> <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m20 18h6v2h-6z" transform="matrix(-1 0 0 -1 46 38)"/><path d="m24 26h6v2h-6z" transform="matrix(-1 0 0 -1 54 54)"/><path d="m22 22h6v2h-6z" transform="matrix(-1 0 0 -1 50 46)"/><path d="m17.0029 20a4.8952 4.8952 0 0 0 -2.4044-4.1729l7.4015-12.8271-1.7309-1-7.5758 13.126a5.6988 5.6988 0 0 0 -5.2433 1.5029c-3.7436 3.6111-3.4537 12.0532-3.44 12.4111a1 1 0 0 0 1 .96h14.9912a1 1 0 0 0 .6-1.8c-3.5397-2.6561-3.5983-8.1463-3.5983-8.2zm-5.0729-3.0029a3.11 3.11 0 0 1 3.0741 3.0029c0 .0381.0019.208.0168.4688l-5.8994-2.6236a3.8 3.8 0 0 1 2.8085-.8481zm3.5194 11.0029a5.2 5.2 0 0 1 -1.4494-3h-2a6.4993 6.4993 0 0 0 .9684 3h-2.2233a16.6166 16.6166 0 0 1 -.7451-4h-2a17.3424 17.3424 0 0 0 .6652 4h-2.6652c.031-1.8364.29-5.8921 1.8027-8.5527l7.533 3.35a13.0253 13.0253 0 0 0 2.2611 5.2027z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></strong> button to clean up the input field.</li>
                    <li>Tap on the <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"><path d="M4 20h16v2H4zM4.293 16.293l11.293-11.293 3.414 3.414-11.293 11.293H4v-3.414zM19.707 6.293l-3.414-3.414 1.414-1.414 3.414 3.414z" fill="currentColor"/></svg> icon in every to-do item to edit it. Then tap on the icon again or hit <strong>"Enter"</strong> to save.</li>
                    <li>Tap on the <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> icon to <strong>clone and paste</strong> the to-do in the current list</li>
                    
                    <li>To search for lists / to-dos, type in the list name / to-do text in the <strong>search field</strong>. Clear your search to restore.</li>
                    <li><strong>Drag</strong> to-dos in the lists to re-order them and drop to-dos between lists</li>
                    <li><strong>Drag</strong> the lists to re-order them</li>
                    <li>Tap on <strong>"X"</strong> at the top right
                    to delete the whole list.</li>
                    <li>All edits are <span className='primary-to-do-color'><strong>automatically</strong></span> saved to the browser storage. </li>
</ul>
<h6>Changing list layout (<strong>desktop only</strong>)</h6>
<ul className='accordion-ul'>
<li>Be default, the <strong>expanded list layout</strong> is enabled in the app which means each list takes up the whole space of a row. To toggle between layouts, check out the same section in the guide for <strong>laptop / desktop devices</strong> above</li>

</ul>
<h6>Deleting your data</h6>

                    <ul className='accordion-ul'>

                    
                    
                    <li>To delete all your data and reset the app, tap on the <strong>Reset the app</strong> button in the bottom-right of the screen (<strong>note that this action is permanent</strong>).</li>
                    
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}


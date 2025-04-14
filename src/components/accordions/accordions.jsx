import Accordion from 'react-bootstrap/Accordion';
import './../../../src/index.css';

export const Accordions = () => {
    return (

        
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Desktop or
                    laptop
                    devices:</Accordion.Header>
                <Accordion.Body>
                    To change the username after initial set up, click on the username in the top right of the navigation, then click anywhere in the app. Click on the <strong>"Add a New List"</strong> button to create a clean list of To-dos. Type in the To-do and click on the "Add a to-do" button or press on "Enter" key.
                    <strong> Long-click</strong> to mark a to-do off and click on the <strong>"X"</strong> at the end of each item to delete an
                    item. If you want to delete all
                    to-dos at once click the <strong> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg></strong> button. Click the
                    <strong> <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m20 18h6v2h-6z" transform="matrix(-1 0 0 -1 46 38)"/><path d="m24 26h6v2h-6z" transform="matrix(-1 0 0 -1 54 54)"/><path d="m22 22h6v2h-6z" transform="matrix(-1 0 0 -1 50 46)"/><path d="m17.0029 20a4.8952 4.8952 0 0 0 -2.4044-4.1729l7.4015-12.8271-1.7309-1-7.5758 13.126a5.6988 5.6988 0 0 0 -5.2433 1.5029c-3.7436 3.6111-3.4537 12.0532-3.44 12.4111a1 1 0 0 0 1 .96h14.9912a1 1 0 0 0 .6-1.8c-3.5397-2.6561-3.5983-8.1463-3.5983-8.2zm-5.0729-3.0029a3.11 3.11 0 0 1 3.0741 3.0029c0 .0381.0019.208.0168.4688l-5.8994-2.6236a3.8 3.8 0 0 1 2.8085-.8481zm3.5194 11.0029a5.2 5.2 0 0 1 -1.4494-3h-2a6.4993 6.4993 0 0 0 .9684 3h-2.2233a16.6166 16.6166 0 0 1 -.7451-4h-2a17.3424 17.3424 0 0 0 .6652 4h-2.6652c.031-1.8364.29-5.8921 1.8027-8.5527l7.533 3.35a13.0253 13.0253 0 0 0 2.2611 5.2027z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></strong> button to clean up the input field. Click on the List Title to edit it. To search for lists / to-dos, type in the list name / to-do text in the search field. Clear your search to restore.
                    Click on <strong>"X"</strong> at the top right
                    to delete the whole list. All edits are automatically saved to the browser storage.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Touch screen
                    devices:</Accordion.Header>
                <Accordion.Body>
                o change the username after initial set up, tap on the username in the top right of the navigation, then tap anywhere in the app. Tap on the <strong>"Add a New List"</strong> button to create a clean list of
                    To-dos. Type in the To-do and tap on the "Add a to-do" button or hit "Enter".
                    Long-tap to mark an item off and click on the <strong>"X"</strong> at the end of each item to delete an item. Tap on the List Title to edit it. To search for lists / to-dos, type in the list name / to-do text in the search field. Clear your search to restore. Click the
                    <strong><svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m20 18h6v2h-6z" transform="matrix(-1 0 0 -1 46 38)"/><path d="m24 26h6v2h-6z" transform="matrix(-1 0 0 -1 54 54)"/><path d="m22 22h6v2h-6z" transform="matrix(-1 0 0 -1 50 46)"/><path d="m17.0029 20a4.8952 4.8952 0 0 0 -2.4044-4.1729l7.4015-12.8271-1.7309-1-7.5758 13.126a5.6988 5.6988 0 0 0 -5.2433 1.5029c-3.7436 3.6111-3.4537 12.0532-3.44 12.4111a1 1 0 0 0 1 .96h14.9912a1 1 0 0 0 .6-1.8c-3.5397-2.6561-3.5983-8.1463-3.5983-8.2zm-5.0729-3.0029a3.11 3.11 0 0 1 3.0741 3.0029c0 .0381.0019.208.0168.4688l-5.8994-2.6236a3.8 3.8 0 0 1 2.8085-.8481zm3.5194 11.0029a5.2 5.2 0 0 1 -1.4494-3h-2a6.4993 6.4993 0 0 0 .9684 3h-2.2233a16.6166 16.6166 0 0 1 -.7451-4h-2a17.3424 17.3424 0 0 0 .6652 4h-2.6652c.031-1.8364.29-5.8921 1.8027-8.5527l7.533 3.35a13.0253 13.0253 0 0 0 2.2611 5.2027z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></strong> button to clean up the input field. If you want to delete all
                    to-dos at once, tap on the <strong> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg></strong> button. And tap on <strong>"X"</strong> at the top right to delete
                    the whole list. All edits are automatically saved to the browser storage.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}


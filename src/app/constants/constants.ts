import {environment} from '../../environments/environment';

export const API_PATH = environment.apiUrl + '/api/v1';
export const ATTACHMENTS_PATH = API_PATH + '/attachments';
export const ACTIONS_PATH = API_PATH + '/actions';
export const BLOGPOSTS_PATH = API_PATH + '/blogposts';
export const COMPANIES_PATH = API_PATH + '/companies';
export const DEVELOPERS_PATH = API_PATH + '/developers';
export const PERFORMED_ACTIONS_PATH = API_PATH + '/performed-actions';
export const PERFORMED_ACTIONS_BLOGPOSTS_PATH = API_PATH + '/performed-actions-blogpost';
export const PROJECTS_PATH = API_PATH + '/projects';
export const USERS_PATH = API_PATH + '/users';
export const TAGS_PATH = API_PATH + '/tags';

export const ATTACHMENTS_DOWNLOAD_PATH = (uuid: string) => ATTACHMENTS_PATH + '/' + `${uuid}` + '/download';


// USER ROLES
export const ADMIN_ROLE = 'admin';
export const MANAGER_ROLE = 'manager';
export const USER_ROLE = 'user';

export const PAGES = [
    {name: 'Actions', link: '/actions', icon: 'fa fa-file-code-o', style: 'default', permit: 'ADMIN' || 'MANAGER'},
    {name: 'Performed Actions', link: '/performedactions', icon: 'fa fa-bars', style: 'default', permit: 'ADMIN' || 'MANAGER'},
    {name: 'Projects', link: '/projects', icon: 'fa fa-sticky-note-o', style: 'default', permit: 'ANY'},
    {name: 'Tags', link: '/tags', icon: 'fa fa-tag', style: 'default', permit: 'ANY'}
];

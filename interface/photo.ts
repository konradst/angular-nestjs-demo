// import { Gallery, GalleryDTO } from './gallery';

// | id         | int(16)      | NO   | PRI | NULL    | auto_increment |
// | name       | varchar(256) | NO   |     | NULL    |                |
// | created    | timestamp    | YES  |     | NULL    |                |
// | modified   | timestamp    | YES  |     | NULL    |                |
// | gallery_id | int(16)      | NO   |     | NULL    |                |

export interface PhotoDTO {
    id?: number;

    name: string;

    created: string;

    modified: string;

    // gallery_id?: number;

    // gallery?: GalleryDTO;
}

export interface Photo extends PhotoDTO {
    // gallery?: Gallery;
}

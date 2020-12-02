import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PhotoDTO } from '../../interface/photo';
// import { GalleryDTO } from '../../interface/gallery';
// import { GalleryEntity } from 'server/gallery/gallery.entity';

// | id         | int(16)      | NO   | PRI | NULL    | auto_increment |
// | name       | varchar(256) | NO   |     | NULL    |                |
// | created    | timestamp    | YES  |     | NULL    |                |
// | modified   | timestamp    | YES  |     | NULL    |                |
// | gallery_id | int(16)      | NO   |     | NULL    |                |

@Entity('64_photos')
export class PhotoEntity implements PhotoDTO {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name!: string;

    @Column()
    created!: string;

    @Column()
    modified!: string;

    // @Column()
    // gallery_id?: number;

    // @ManyToOne(type => GalleryEntity, gallery => gallery.photos)
    // @JoinColumn({ name: 'gallery_id' })
    // gallery?: GalleryEntity;
}

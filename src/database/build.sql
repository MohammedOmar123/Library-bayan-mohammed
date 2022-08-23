begin;
drop table if exists categories , books CASCADE;

create table categories (
    id serial primary key ,
    cName varchar(100) not null
);
create table books (
    id serial primary key ,
    bName varchar(100) not null,
    img text not null,

            category_id int not null ,
        FOREIGN KEY (category_id) REFERENCES categories(id)
    -- foreign key (highestStudent_id) 
    --  REFERENCES students (student_id)
);

insert into categories (cName) values
('medical'),
('sports'),
('stories');

insert into books (bName , img ,category_id) values
('Master XML','https://books.google.com/books/content?id=sLfHGZzEy9cC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70Z3p9MNRic7uGml_4x-DrUO-HEE6V55L3p6sk-hjn2wLj14bMb-I4Fu2M-PqSrQL5UYqOU9mYp-nGKdnSw1fIzbSnrMqXizkWAa0x9e3mYaiqOHiQXmwXRBaJievq9A04V5FsS&source=gbs_api',1),
('rogramming','https://books.google.com/books/content?id=MTne6h_chwEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',2),
('Master XML','https://books.google.com/books/content?id=sLfHGZzEy9cC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70Z3p9MNRic7uGml_4x-DrUO-HEE6V55L3p6sk-hjn2wLj14bMb-I4Fu2M-PqSrQL5UYqOU9mYp-nGKdnSw1fIzbSnrMqXizkWAa0x9e3mYaiqOHiQXmwXRBaJievq9A04V5FsS&source=gbs_api',1),
('rogramming','https://books.google.com/books/content?id=MTne6h_chwEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',2);





commit;
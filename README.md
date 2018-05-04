## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|


### Association
- has_many :groups, through: :group_users
- has_many :messages
- belongs_to :group_user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :group_users
- has_many :messages
- belongs_to :group_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|body|text|
|image|string|

### Association
- belongs_to :user
- belongs_to :group

<!-- 中間テーブル  usersとgroupsテーブルを繋ぐ-->
## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :groups

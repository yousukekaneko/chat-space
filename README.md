## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :groups, through: :group_use
- has_many :messages
- belongs_to :group_use

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :uses, through: :group_use
- has_many :messages
- belongs_to :group_use

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
## group_useテーブル
|Column|Type|Options|
|------|----|-------|
|user|reference|null: false|
|group|reference|null: false|

### Association
- has_many :users
- has_many :groups

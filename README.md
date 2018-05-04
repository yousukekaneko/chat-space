## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|passward|string|null: false, unique: true|

### Association
- has_many :group, through: :id
- has_many :messages

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :members, through: :id
- has_many :massages

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

<!-- 中間テーブル membersとgroupテーブルを繋ぐ-->
## idテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false|
|group_id|reference|null: false|

### Association
- belongs_to :user
- belongs_to :group

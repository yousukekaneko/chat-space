## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :groups, through: :GroupUse
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :members, through: :GroupUse
- has_many :messages

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

<!-- 中間テーブル  userとgroupsテーブルを繋ぐ-->
## GroupUseテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false|
|group_id|reference|null: false|

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|passward|string|null: false, unique: true|

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|group_name|string|null: false|
|user_id|integer|null: false|
|timestamps|null: false|

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|body|text|
|timestamps|null: false|

## imageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|image|string|
|timestamps|null: false|

### Association
- belongs_to : group
- belongs_to : user

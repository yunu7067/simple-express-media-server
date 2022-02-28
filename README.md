# SEMS(simple express media server)

## Structure Diagram

```mermaid
flowchart TB
  subgraph NODE

    subgraph SEMS
        express
    end
    subgraph DB
        MongoDB
    end
    subgraph Cache
        Redis
    end
    subgraph Disk
        disk
    end

    express -.-> MongoDB
    MongoDB -.-> express

    express -.-> Redis
    Redis -.-> express
    express -.-> disk
    disk -.-> express


  end
```

## Features

1. 미디어 파일 업로드
2. 미디어 파일 다운로드
3. 미디어 파일 메타데이터 다운로드
4. 미디어 파일 섬네일 생성 및 캐싱
5. 미디어 파일 검색
6. 미디어 파일 삭제

##

## API

|                    Method                     | Path           |
| :-------------------------------------------: | :------------- |
|  <span style="color:#61affe">**GET**</span>   | /find/{id}     |
|  <span style="color:#61affe">**GET**</span>   | /download/{id} |
|  <span style="color:#61affe">**GET**</span>   | /metadata/{id} |
|  <span style="color:#61affe">**GET**</span>   | /thumb/{id}    |
|  <span style="color:#49cc90">**POST**</span>  | /upload        |
| <span style="color:#f93f3f">**DELETE**</span> | /remove/{id}   |

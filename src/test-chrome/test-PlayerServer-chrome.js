//����UserService

var userId;
SgtApi.UserService.login('llo014', 'qqqqqqqq', function (result, data) {
    if (result) {
        console.log('��¼�ɹ�');
        userId = data.userId;
    }
});

SgtApi.PlayerService.init();


//���Դ�����ɫ
function test_create() {

    var player = SgtApi.entityFactory('Player');
    player.name = 'xiaosi';

    SgtApi.PlayerService.create(player, function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}


//���Ը��½�ɫ��Ϣ
function test_update() {


    var player = SgtApi.entityFactory('Player');
    player.id = '00000051223';
    player.customId = 'asdasdasdad';
    player.userId = '8a2111a85003f54d015012a1becb0034';
    player.name = 'wwwwwwwwwwwww';

    SgtApi.PlayerService.update(player, function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}

//���Ը����û�ID���ҽ�ɫ
function test_getByUserId() {

    SgtApi.PlayerService.getByUserId(userId, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//����ͨ���û�ID�������е�һ����ɫ
function test_getOneByUserId() {

    SgtApi.PlayerService.getOneByUserId(userId, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}


//�����ϴ��浵
function test_uploadSave() {

    var save = SgtApi.entityFactory('Save');
    save.playerId = '00000051237';
    save.content = 'asdadadad';
    console.log(save);

    SgtApi.PlayerService.uploadSave(save, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}


//�������ش浵
function test_downloadSave() {

    SgtApi.PlayerService.downloadSave('00000051237', function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//���Ը��ݽ�ɫ�����ҽ�ɫ
function test_getByName() {

    SgtApi.PlayerService.getByName('zhangsan', 1, 2, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//���Ը�������½ʱ����ҽ�ɫ
function test_getByLastLoginTime() {

    SgtApi.PlayerService.getByLastLoginTime(1000000, 0, 3, function (result, data) {
        console.log(data);
    });
}

//����ͨ���Զ���ID��ȡ��ɫ��Ϣ
function test_getPlayerByCustomId() {

    SgtApi.PlayerService.getPlayerByCustomId('asdasdasdad', function (result, data) {
        console.log(data);
    });
}

//����ͨ��playerIdɾ����ɫ�������Ϣ
function test_deletePlayerByPlayerId() {

    SgtApi.PlayerService.deletePlayerByPlayerId('00000051231', function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}

//����ͨ��ID��ȡPlayer
function test_getPlayerById() {

    SgtApi.PlayerService.getPlayerById('00000051237', function (result, data) {
        if (result) {
            console.log(data);
        }
    });

}

//��������������ɸ������¼��sgpplayer
function test_searchPlayersByLastLogin() {

    SgtApi.PlayerService.searchPlayersByLastLogin(4, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//��������ָ����ɫ�ĺ�������
function test_setFriendsMaxNumber() {

    SgtApi.PlayerService.setFriendsMaxNumber('00000051241', 5, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//���Ի�ȡָ����ɫ�ĺ�������
function test_getFriendsMaxNumber() {

    SgtApi.PlayerService.getFriendsMaxNumber('00000051241', function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}


<!--
//
// �� �]�w����M�椺�e
//
//   ���㪺�]�w�榡: mkList("�C���ɮצ�m","�C����D","�r���ɮצ�m","�ᵲ�X��(f)");
//   �@�몺�]�w�榡: mkList("�C���ɮצ�m","�C����D");
// �w�]������Y����: mkList("�C���ɮצ�m","�C����D","", "f");
// �۰ʨ��o�C���T: mkList("�C���ɮצ�m");
//
// ����1: �ĤG�ӳ]�w��(�C����D)�@�몺�榡�O�u�t�X�� - ���ؼ��D�v�C
// ����2: �ĥ|�ӳ]�w��(�ᵲ�X��/Frozen Flag)�O�H f �r���Ӫ�ܹw�]��������񦹴C���ɮסC

// �]�w����M�涵�خɡA�Ъ`�N�H�U�U���G
//
//    1. �p�G�z�ϥά۹���|(Relative Path)���覡�ӳ]�w�ɮצ�m�A�г̦n�b�s���e���ϥΦp ./ �� ../ �ӥܷN�ثe
//       �Ҧb����Ƨ��C��z�H������|(Absolute Path)���覡�ӳ]�w�s���ɡA���F http:// �� ftp:// ���~�A�z�]�i
//       �ϥΦp mms:// �� rtsp:// �o�Ǧ�y�B�z�C�骺�q�T��w�C
//
//    2. �p�G�z�Q�n�ϥΦr���\��A�C�鶵�ت��Ĥ@�ӳ]�w��(�C���ɮצ�m)�βĤT�ӳ]�w��(�r���ɮצ�m)�䤤�@���A
//       �����ϥε�����|���覡�ӳ]�w�s���A�_�h�r���\��u�|�b�����B�@�A�Ӧb���ݦ��A���o���Ī��C���~�A�P�C��
//       �ɮ׬۳s���r���ɮסA�̦n�n�ŦX�o��ӱ���G 1.�s��b�ۦP����Ƨ��F 2.�H�ۦP���ɦW�өR�W�C�Ҧp�G�C��
//       �ɦW�� xyz.wmv �N�ϥ� xyz.smi ���r���ɮסC���p�r���ɦW��C���ɦW���@�ˡA�z�����b����M�涵�س]�w��
//       �[�J�ĤT�ӳ]�w��(�r���ɮצ�m)�A���𶷥[�J���|�C�H�U���]�w�d�һ����F�W�z�U�I�G
//
//         ��1: mkList("http://mydomain.com/exobud/video/xyz.wmv","�ڪ��ͬ����q");
//              �ѻ� - �r���ɮ� xyz.smi �s��b�ۦP����Ƨ��A�h�𶷳]�w�u�r���ɮצ�m�v�C
//         ��2: mkList("http://mydomain.com/exobud/video/xyz.wmv","�ڪ��ͬ����q","abc.smi");
//              �ѻ� - �r���ɮצs��b�ۦP����Ƨ��A���ɦW���O�A���]�w�r���ɦW�C
//         ��3: mkList("./music/xyz.wma","�t�X�� - �q�W","http://others.net/lyric/xyz.smi");
//              �ѻ� - �r���ɮצs��b���P���D���A�����ϥε�����|���覡�ӳ]�w�u�r���ɮצ�m�v�C
//         ��4: mkList("http://others.net/music/xyz.wma","�t�X�� - �q�W");
//              �ѻ� - �C���ɮ׻P�r���ɮ׭Ѧs��b���P���D���A�P�ɤS�ŦX�ۦP��Ƨ����ɦW������C
//
//    3. �ϥΥ��^��p�g�b�Φr�����ɮ׸��|�û��O�̫O�I�����k�A�]���i�H�O�Ҧb�j�������p�U��������`Ū���s���C
//       �кɶq�קK�ϥΥ]�t���r�`�r�� (�Ҧp����r������r) �B�S��r���Υb�Ϊťժ��s���F�p�G�i�H���ܡA�b�]�w
//       �s���ɡA�̦n�N�o�Ǥ�r�ഫ���y�H����X�z�A�Ҧp�N�b�Ϊťռg�� %20 �C
//
//    4. ��z�b�]�w�C����D�ɡA�i��|�J�W�@�Ǹ��c�餤�� (Big5) ���P�y�t����r�A�Ҧp����Τ��C�p�G�z�M�w�n
//       �O�d�C��쥻���y�尵���C����D�A�Х��N�o�Ǥ�r�ഫ���� &#12345; ���y������X�z(�YUnicode/�U��X)�A
//       �M��~�n�g��C����D���]�w�ȸ̥h�A�_�h�o�ǥ~�y��r�O�L�k�b���񭱪O�μ���M��W���T��ܥX�Ӫ��C
//
//    5. �p�G�z�ϥΥH�u�۰ʨ��o�C���T�v���覡��Ū���C����D����T�A�Y�b����M�涵�ظ̥u��g�C���ɮצ�m�A
//       �C����D�h�w�]��ܬ��u�����w�C����D(���ݦ۰ʨ��o�C���T)�v�C�b�ǳƶ}�l����Ӧ��خɡA�{���~�|Ū��
//       �C���T�A�M��b���񭱪O�μ���M����ܥX�ӡC(���񾹩Ҧb���������s��z��A�K�|�^�_���Ӫ����A�C)
//
//    6. �]�����{���O�Q�ηL�n�� Windows Media Player ������x����{���A�ҥH�ä��䴩�H .ra .rm .rv .ram �o��
//       �� RealNetworks ��q���C��榡�Ӽ��񭵰T�ε��T���e�C�Ф��n�b����M�涵�ؤ��[�J�o�ǴC���ɮסC�t�~�A
//       ���{�����M�䴩�L�n�̷s�}�o���uWindows Media ����M��v�ɮ׮榡 (���ɦW�� .wpl)�A���O�]�����榡�|��
//       �}�o�����A�ӥ��{���惡�榡���䴩�i�ण�������A�ҥH��ĳ�ϥΪ����קK�ϥγo���ɮרӻs�@����M��A���D
//       �z�O���{�����}�o�H�������O�s�@�̡A�ι�{���B�@�w���`�J�F�ѡC

// ��������������������������������������������������������������������������������������������������������
//            �H�U���˥�����M�檺���e�A�Цb�]�w�z����������M�槹����A�N�������R���ε��Ѱ_�ӡC
// ��������������������������������������������������������������������������������������������������������
//
// [T1] �U���o�@��O�ϥΤ@�몺�]�w�榡�ӳ]�w����M�涵�� (�O���]�w�u��b�������`��ܦr���A�b�����ϥήɽаѦҤW�z��2�I������)



mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-11.wma","���̪L-����-���s");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-10.wma","���̪L-����-�R���T�Q���p");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-9.wma","�i��[-Over The Rainbow-�J��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-7.wma","�B�Y�^-�ڪ����ѻP���j-���}�Ȧ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-6.wma","������-�C-�t�ϸ`");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-5.wma","�}�Y��-�ڷR�Ax4-�M�w�R�A");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-4.wma","5566-���֦~�q�����n�a-�s�b");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-3.wma","S.H.E-SUPER STAR-SUPER STAR");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-2.wma","��?-�֤���1997-2003-�I�檺�u�`");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-1.wma","��?-�֤���1997-2003-���Ѥ��^�a");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-1.wma","�P�N��-���f��-�H�����W");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-2.wma","�P�N��-���f��-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-3.wma","�P�N��-���f��-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-4.wma","�P�N��-���f��-�T�~�G�Z");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-5.wma","�P�N��-���f��-�F���}");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-6.wma","�P�N��-���f��-�pť�o��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-7.wma","�P�N��-���f��-�P�@�ؽս�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-8.wma","�P�N��-���f��-�o������");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-9.wma","�P�N��-���f��-�R���a�V");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-10.wma","�P�N��-���f��-���");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-11.wma","�P�N��-���f��-���M");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/G6-3.wma","�q�����n�a-��������-�᳣�}�n�F(S.H.E)");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T6-3.wma","���|��-�B�a�����q1-�ڮa�b����-��ֽg�g");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/G6-2.wma","�L���-SHINO 1st Best ���i���-�߰�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T6-2.wma","����-�߷R���ѲP-�߷R���ѲP");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T6-1.wma","����-�߷R���ѲP-���i�����R�E�����F����r");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/G6-1.wma","�s�P�X��-��o��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW01.wma","���̵Y-�ݧ�72��-���R�A");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW02.wma","���̵Y-�ݧ�72��-�ݧ�72��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW03.wma","���̵Y-�ݧ�72��-�������i��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW04.wma","���̵Y-�ݧ�72��-������");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW05.wma","���̵Y-�ݧ�72��-���Ԯ�s��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW06.wma","���̵Y-�ݧ�72��-���@�Ѫ��A");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW07.wma","���̵Y-�ݧ�72��-Prove It");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW08.wma","���̵Y-�ݧ�72��-�z�̪᪺���D");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW09.wma","���̵Y-�ݧ�72��-���ҤW��÷��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW10.wma","���̵Y-�ݧ�72��-�n�F��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g001.wma","'���̵Y-�M�h�믫");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T09.wma","Ĭ�êB-���Ӫ��ɭ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T10.wma","���߼�-�R��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T01.wma","�i�̤p�l-Hey!Hah!");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T02.wma","�i�̤p�l-�D�R�_�誩");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T03.wma","F4-�Ϥ����u�`");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T04.wma","F4-�����ॢ�h�A");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T05.wma","�O�ɲM-�ѤW�H��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T06.wma","�O�ɲM-�P�߬ۦL");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T07.wma","�}�Ш�-Tic Tac Toe");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T08.wma","�B�w�ءB��°�-�L���D");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/001.wma","�P�N�ۤK�תŶ�-�b�~�H");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/003.wma","�P�N�ۤK�תŶ�-�b�q�K��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0103.wma","�P�N�ۤK�תŶ�-�t��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x4.wma","�P�N�ۤK�תŶ�-�s��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x5.wma","�P�N�ۤK�תŶ�-�����o��h");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x6.wma","�P�N�ۤK�תŶ�-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x7.wma","�P�N�ۤK�תŶ�-�ݷݪw����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x8.wma","�P�N�ۤK�תŶ�-�^��L�h");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x9.wma","�P�N�ۤK�תŶ�-�������p�K�K");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/010.wma","�P�N�ۤK�תŶ�-�̫᪺�ԧ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0001.wma","�P�N�ۭS�S��-�R�b�褸�e");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0002.wma","�P�N�ۭS�S��-���ڦ^�ӤF");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0003.wma","�P�N�ۭS�S��-²��R");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0004.wma","�P�N�ۭS�S��-�Ԫ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0005.wma","�P�N�ۭS�S��-�}���F�f");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0006.wma","�P�N�ۭS�S��-�W���@�E�|�T");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0007.wma","�P�N�ۭS�S��-�藍�_");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0008.wma","�P�N�ۭS�S��-�·G�j��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0009.wma","�P�N�ۭS�S��-���I��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0010.wma","�P�N�ۭS�S��-�w�R");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0001.wma","�P�N�ۦP�W�M��-�i�R�k�H");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0002.wma","�P�N�ۦP�W�M��-�����D�q");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0003.wma","�P�N�ۦP�W�M��-�P��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0004.wma","�P�N�ۦP�W�M��-�Q�l");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0005.wma","�P�N�ۦP�W�M��-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0006.wma","�P�N�ۦP�W�M��-�¦���q");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0007.wma","�P�N�ۦP�W�M��-�촵�Z��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0008.wma","�P�N�ۦP�W�M��-�L�Ħw�Ѵ���");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0009.wma","�P�N�ۦP�W�M��-�s����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0010.wma","�P�N�ۦP�W�M��-�Ϥ�V����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0011.wma","�P�N��Fantasy Plus-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0012.wma","�P�N��Fantasy Plus-�p��q�e�ּ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0013.wma","�P�N��Fantasy Plus-�@�ɥ���");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/004.wma","���q��-�R���D�q");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/005.wma","�\�Ьv-�J��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/006.wma","5566-�L�ҿ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/008.wma","�è�-�A�O�ڳ̲`�R���H");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/009.wma","5566-�����L");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0010.wma","�d�_��-���s");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0011.wma","�d�d-�γ\�z�O�諸");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0012.wma","�G�q��-808");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0013.wma","�����X-�A�@���]�n");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0014.wma","�����X-��z�Ө�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0015.wma","�S�h��-I belive");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0016.wma","�S�h��-���^");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0017.wma","�G�q��-�ȱo");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0018.wma","�G�q��-�I�q");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0019.wma","���Ȱa-�k");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0020.wma","�\�z�Y-�t�����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0021.wma","�\�z�Y-�R������");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0022.wma","�G����-�Q���A���R");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0023.wma","�G����~���z�Y-�s�y����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0024.wma","�G����~�i�Ǥ�-���k����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0025.wma","�G����-���f�����R�p");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0034.wma","�����-�߱�����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0026.wma","�����-�ˤߤӥ��v");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0027.wma","�����-�ﭱ���k�ĬݹL��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0028.wma","�����~���彫-�R�ڷR��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0029.wma","�����~���߼�-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0030.wma","�����~�}�h�-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0031.wma","�ץ��d-�@�d�s�@�]");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0032.wma","�ץ��d-��@�Ӧr�N��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0033.wma","�ץ��d-�d���b");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0035.wma","�U��-�s���F��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0036.wma","���Q��-�u�u����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0037.wma","�i��a~���Q��-��u�N�n");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0038.wma","�B�Y�^-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0039.wma","�P�z��~�N�кa�@-�{�b�֩��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0040.wma","�P�z��-�O�@");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0041.wma","�P�z��-�B�B�d��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0042.wma","�P�z��-�`�����S");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0043.wma","�h��y-�u�����z");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0044.wma","�h��y-���O�z");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0045.wma","�h��y-�s�]�Ž�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0046.wma","�h��y-���۷R");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0047.wma","�h��y-�M�w�n�R�A");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0048.wma","�h��y-�Q�A�A���b0:03");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0049.wma","�h��y-�R���¥�(HAPPY)��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA01.wma","�]�P��-���_");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA02.wma","�]�P��-�ڤ����L");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA03.wma","�]�P��-�û�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA04.wma","�]�P��-������");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA05.wma","�]�P��-���U��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA06.wma","�]�P��-�Ƿ|");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA07.wma","�]�P��-�~���L����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA08.wma","�]�P��-�F��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA09.wma","�]�P��-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA010.wma","�]�P��-�S���H����V");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA011.wma","�]�P��-MY STORY YOUR SONG");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0001.wma","�]�P��-����-���");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0002.wma","�]�P��-����-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0003.wma","�]�P��-����-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0004.wma","�]�P��-����-�k�`");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0005.wma","�]�P��-����-���O�u���R��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0006.wma","�]�P��-����-�u��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0007.wma","�]�P��-����-�m��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0008.wma","�]�P��-����-�R���r��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0009.wma","�]�P��-����-�H�����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0010.wma","�]�P��-����-�ڬO��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a01.wma","�]�P��-�ۿﶰ-Hey jude");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a02.wma","�]�P��-�ۿﶰ-Silent All These Years");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a03.wma","�]�P��-�ۿﶰ-���V��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a04.wma","�]�P��-�ۿﶰ-�S�ɶ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a05.wma","�]�P��-�ۿﶰ-Sometime");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a06.wma","�]�P��-�ۿﶰ-��ӱz�����n");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a07.wma","�]�P��-�ۿﶰ-That I Would Be Good");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a08.wma","�]�P��-�ۿﶰ-Venus");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a09.wma","�]�P��-�ۿﶰ-Someone");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a10.wma","�]�P��-�ۿﶰ-�Ѫ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a11.wma","�]�P��-�ۿﶰ-�N�O�o��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a12.wma","�]�P��-�ۿﶰ-Up2u");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0011.wma","�]�P��-Leave-�@��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0012.wma","�]�P��-Leave-�ڤ��R");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0013.wma","�]�P��-Leave-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0014.wma","�]�P��-Leave-���Ӫ���");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0015.wma","�]�P��-Leave-�@�˪��L��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0016.wma","�]�P��-Leave-�R�q�s�}�l");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0017.wma","�]�P��-Leave-���P");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0018.wma","�]�P��-Leave-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0019.wma","�]�P��-Leave-�ڷQ");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0020.wma","�]�P��-Leave-Leave");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0021.wma","�]�P��-Leave-We Will Get There");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0022.wma","�]�P��-Leave-�@�_���L");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg01.wma","�]�P��-�ڭn������-On The Road");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg02.wma","�]�P��-�ڭn������-�ڭn������");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg03.wma","�]�P��-�ڭn������-�a�Ѯ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg04.wma","�]�P��-�ڭn������-�s���I");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg05.wma","�]�P��-�ڭn������-�}�l���F");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg06.wma","�]�P��-�ڭn������-�����a�a");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg07.wma","�]�P��-�ڭn������-�۫H");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg08.wma","�]�P��-�ڭn������-����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg09.wma","�]�P��-�ڭn������-���o�@��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg10.wma","�]�P��-�ڭn������-�`��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg11.wma","�]�P��-�ڭn������-�P���@�Ѯ𴸧����}�A");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg12.wma","�]�P��-�ڭn������-On the Road2");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg001.wma","�]�P��-�P�W�M��-�W�ַP");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg002.wma","�]�P��-�P�W�M��-�R���Ү�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg003.wma","�]�P��-�P�W�M��-�Ѷ¶�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg004.wma","�]�P��-�P�W�M��-E.Lover");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg005.wma","�]�P��-�P�W�M��-�@�ܤ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg006.wma","�]�P��-�P�W�M��-�M��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg007.wma","�]�P��-�P�W�M��-�۵M");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg008.wma","�]�P��-�P�W�M��-�ש�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg009.wma","�]�P��-�P�W�M��-�ܦn");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg010.wma","�]�P��-�P�W�M��-Leave Me Alone");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg01.wma","�]�P��-���ۭ�-���ۭ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg02.wma","�]�P��-���ۭ�-You love me");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg03.wma","�]�P��-���ۭ�-�o��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg04.wma","�]�P��-���ۭ�-�Ѫ��a�[");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT01.wma","���-�ڪ��O�q-�ͻH");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT02.wma","���-�ڪ��O�q-�D");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT03.wma","���-�ڪ��O�q-��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT04.wma","���-�ڪ��O�q-�y�P");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT05.wma","���-�ڪ��O�q-�p�R��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT06.wma","���-�ڪ��O�q-�@�I�I");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT07.wma","���-�ڪ��O�q-�E����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT08.wma","���-�ڪ��O�q-�_�F");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT09.wma","���-�ڪ��O�q-�F�z�̪��¬}");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT010.wma","���-�ڪ��O�q-�ɫB");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT011.wma","���-�ڪ��O�q-�p�_��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT012.wma","���-�ڪ��O�q-�ڪ��e�y");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA1.wma","���-���H���q-�I�q");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA2.wma","���-���H���q-�o��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA3.wma","���-���H���q-199����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA4.wma","���-���H���q-�@�ˬ��C");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA5.wma","���-���H���q-�s�R���p");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA6.wma","���-���H���q-�߱�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA7.wma","���-���H���q-�~��Z��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA8.wma","���-���H���q-�������");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA9.wma","���-���H���q-���K�k�l");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA10.wma","���-���H���q-���H���q");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA11.wma","���-���H���q-�Ӥ���");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC1.wma","���-��ީt��-�֤k����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC2.wma","���-��ީt��-�_�z��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC3.wma","���-��ީt��-�}��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC4.wma","���-��ީt��-��h�G�m");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC5.wma","���-��ީt��-�U�V�`�|");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC6.wma","���-��ީt��-�߷R���A�|��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC7.wma","���-��ީt��-�r�ީ]����");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC8.wma","���-��ީt��-�٨�A");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC9.wma","���-��ީt��-��ŧĵ��");                      
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC10.wma","���-��ީt��-��K�t��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC11.wma","���-��ީt��-���b�Ť����p�B");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC12.wma","���-��ީt��-��ع�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB1.wma","���-LOVE-�L�n���Ҧb");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB2.wma","���-LOVE-��]�B");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB3.wma","���-LOVE-�ӥJ�H�]���h");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB4.wma","���-LOVE-KISS ME�]�P�P���ڤ�)");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB5.wma","���-LOVE-�R�����ɧ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB6.wma","���-LOVE-�I��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB7.wma","���-LOVE-��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB8.wma","���-LOVE-�p�j�K��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB9.wma","���-LOVE-��@��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB10.wma","���-LOVE-�P�O�C�K");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TB11.wma","���-LOVE-�R�A�@�U�~");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA01.wma","���-���F-�W�}�F");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA02.wma","���-���F-�u�@��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA03.wma","���-���F-�����b�G��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA04.wma","���-���F-���F");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA05.wma","���-���F-�W�ұϱϧ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA06.wma","���-���F-�ݧ�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA07.wma","���-���F-�P�p��ä[");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA08.wma","���-���F-�@�ͳ̷R���H");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA09.wma","���-���F-�ש�");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA10.wma","���-���F-�i�H��O");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA11.wma","���-���F-�b�]11�I��");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA12.wma","���-���F-�̫�O�ŬX");




// �H�W�Ҧ��}�Y�� http:// ����y�����ɮ׳s���A���O�����ꪺ�@�Ǻ������֤��ɪ��ϧK�O���Ѫ��C
// ��z����o�Ǧ��ت��ɭԡA�ä��@�w�O�ҤW�C����y�����ɮ׳s���A������������`�s�u�A�礣�ư��ɮצ�m�w�ܧ�C

// ��������������������������������������������������������������������������������������������������������
//          �z�i�H�b�U���ťժ��a�� ( �]�w���e�����g�b //--> �аO���e )�A�}�l�]�w�z����������M��C
// ��������������������������������������������������������������������������������������������������������
//-->
import { Layout, Table } from "antd";
import "../assets/style/main.css";
import Footer from "./general/Footer";
import Header from "./general/Header";
import Providers from "../providers";
import Tabs from "../components/general/Tabs";
import { MifIcon } from "@metroui/icons";
import {
  RibbonMenu,
  RibbonTab,
  RibbonTabGroup,
  RibbonTabSubGroup,
  RibbonTabDivider,
  RibbonButton,
  RibbonIconButton,
  RibbonToolButton,
  RibbonButtonGroup,
  RibbonDropdown,
  RibbonDropdownMenu,
  RibbonDropdownItem,
  RibbonDropdownCheckItem,
  RibbonDropdownDivider,
  RibbonSplitButton,
} from "@metroui/ribbon-menu";

const { Content } = Layout;

const columns = [
	
  {
    title: "ردیف",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
        children: [
          {
            text: "Yellow",
            value: "Yellow",
          },
          {
            text: "Pink",
            value: "Pink",
          },
        ],
      },
      {
        text: "Category 2",
        value: "Category 2",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: "7%",
  },
  {
    title: "تاریخ",
    dataIndex: "date",
    sorter: (a, b) => a.date - b.date,
  },
   {
    title: "ساعت",
    dataIndex: "time",
    sorter: (a, b) => a.time - b.time,
  },
   {
    title: "نام شعبه",
    dataIndex: "department",
    sorter: (a, b) => a.department - b.department,
  },
  {
    title: "کد شعبه",
    dataIndex: "depId",
    sorter: (a, b) => a.depId - b.depId,
  },
   {
    title: "رویداد",
    dataIndex: "eve",
    sorter: (a, b) => a.eve - b.eve,
  },
   {
    title: "شماره ورودی",
    dataIndex: "inputNumber",
    sorter: (a, b) => a.inputNumber - b.inputNumber,
  },
{
    title: "شماره کاربر",
    dataIndex: "userNumber",
    sorter: (a, b) => a.userNumber - b.userNumber,
  },
{
    title: "نام کاربر",
    dataIndex: "userName",
    sorter: (a, b) => a.userName - b.userName,
  }


];
const data = [
  {
    name: 1,
    date: "1403/06/02",
    time: "10:20",
    department: "مشهد",
    depId: "23",
    eve: "خرید",
    inputNumber: 3200,
    userNumber: 145,
    userName: "mahmoudink",
  },
    {
    name: 2,
    date: "1403/06/01",
    time: "12:20",
    department: "تهران مرکز",
    depId: "85",
    eve: "فروش",
    inputNumber: 896320,
    userNumber: 140,
    userName: "sadeghi",
  },
   {
    name:3,
    date: "1403/05/01",
    time: "12:20",
    department: "تهران مرکز",
    depId: "85",
    eve: "فروش",
    inputNumber: 78940,
    userNumber: 140,
    userName: "sadeghi",
  },
   {
    name: 4,
    date: "1403/05/01",
    time: "12:20",
    department: "تهران مرکز",
    depId: "10",
    eve: "فروش",
    inputNumber: 78940,
    userNumber: 140,
    userName: "sadeghi",
  }
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
function App() {
  return (
    <Providers>
      <Layout>
        {/* <Header /> */}
        <Content className="content">
          <RibbonMenu>
            <RibbonTab mode="static" label="اطلاعات پایه"></RibbonTab>
            <RibbonTab label="پرونده">
              <RibbonTabGroup title="دکمه های معمولی">
                <RibbonButton
                  caption="پیام ها"
                  icon="mif-envelop"
                  title="ارسال پیام"
                  onClick={() => {
                    alert("روی دکمه پیام کلیک شد!");
                  }}
                />
                <RibbonButton caption="اشتراک گذاری" icon="mif-share" />
                <RibbonDropdown>
                  <RibbonButton
                    caption="برنامه ها"
                    icon="mif-apps"
                    title="برنامه ها"
                  />
                  <RibbonDropdownMenu>
                    <RibbonDropdownItem
                      caption="Windows 10"
                      onClick={(e) => {
                        console.log(e);
                      }}
                    />
                    <RibbonDropdownItem caption="Windows 11" />
                    <RibbonDropdownItem caption="Office 365" />
                    <RibbonDropdownDivider />
                    <RibbonButtonGroup active={2}>
                      <RibbonDropdownItem
                        caption="Windows 10"
                        onClick={(e) => {
                          console.log(e);
                        }}
                      />
                      <RibbonDropdownItem caption="Windows 11" />
                      <RibbonDropdownItem caption="Office 365" />
                    </RibbonButtonGroup>
                    <RibbonDropdownDivider />
                    <RibbonDropdownCheckItem
                      checked
                      caption="Windows 10"
                      onClick={(e) => {
                        console.log(e);
                      }}
                    />
                    <RibbonDropdownCheckItem checked caption="Windows 11" />
                    <RibbonDropdownCheckItem checked caption="Office 365" />
                    <RibbonDropdownDivider />
                    <RibbonButtonGroup active={[2]} radio>
                      <RibbonDropdownItem caption="Windows 10" />
                      <RibbonDropdownItem caption="Windows 11" />
                      <RibbonDropdownItem caption="Office 365" />
                    </RibbonButtonGroup>
                    <RibbonDropdownDivider />
                    <RibbonDropdown>
                      <RibbonDropdownItem caption="Apps" />
                      <RibbonDropdownMenu>
                        <RibbonDropdownItem caption="Windows 10" />
                        <RibbonDropdownItem caption="Windows 11" />
                        <RibbonDropdownItem caption="Office 365" />
                      </RibbonDropdownMenu>
                    </RibbonDropdown>
                  </RibbonDropdownMenu>
                </RibbonDropdown>
              </RibbonTabGroup>

              <RibbonTabGroup title="نمونه دکمه های ابزارک ها">
                <RibbonTabSubGroup style={{ width: "70px" }}>
                  <RibbonIconButton caption="Mail" icon="mif-envelop" />
                  <RibbonIconButton caption="Share" icon="mif-share" />
                  <RibbonDropdown>
                    <RibbonIconButton caption="Rocket" icon="mif-rocket" />
                    <RibbonDropdownMenu>
                      <RibbonDropdownItem caption="Windows 10" />
                      <RibbonDropdownItem caption="Windows 11" />
                      <RibbonDropdownItem caption="Office 365" />
                    </RibbonDropdownMenu>
                  </RibbonDropdown>
                </RibbonTabSubGroup>

                <RibbonTabDivider />

                <RibbonTabSubGroup
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    width: "74px",
                  }}
                >
                  <RibbonToolButton caption="Mail" icon="mif-envelop" />
                  <RibbonToolButton caption="Share" icon="mif-share" />
                  <RibbonToolButton caption="Rocket" icon="mif-rocket" />
                  <RibbonToolButton caption="Settings" icon="mif-cogs" />
                  <RibbonToolButton caption="Bell" icon="mif-bell" />
                  <RibbonToolButton caption="Alarm" icon="mif-alarm" />
                  <RibbonDropdown>
                    <RibbonToolButton caption="Apps" icon="mif-apps" />
                    <RibbonDropdownMenu>
                      <RibbonDropdownItem caption="Windows 10" />
                      <RibbonDropdownItem caption="Windows 11" />
                      <RibbonDropdownItem caption="Office 365" />
                    </RibbonDropdownMenu>
                  </RibbonDropdown>
                </RibbonTabSubGroup>
              </RibbonTabGroup>

              <RibbonTabGroup title="دکمه های تکی">
                <RibbonSplitButton
                  caption="'گزینه ها'"
                  icon="mif-cog"
                  buttonClassName="disabled"
                >
                  <RibbonDropdownMenu>
                    <RibbonDropdownItem caption="Windows 10" />
                    <RibbonDropdownItem caption="Windows 11" />
                    <RibbonDropdownItem caption="Office 365" />
                    <RibbonDropdownDivider />
                    <RibbonDropdownCheckItem checked caption="Windows 10" />
                    <RibbonDropdownCheckItem checked caption="Windows 11" />
                    <RibbonDropdownCheckItem checked caption="Office 365" />
                    <RibbonDropdownDivider />
                  </RibbonDropdownMenu>
                </RibbonSplitButton>
              </RibbonTabGroup>

              <RibbonTabGroup title="گروه دکمه ها">
                <RibbonButtonGroup
                  radio
                  style={{ width: "200px", maxHeight: "88px" }}
                >
                  <RibbonIconButton caption="فهرست" icon="mif-list" />
                  <RibbonIconButton caption="ابزار" icon="mif-cog" />
                  <RibbonIconButton caption="بارکد" icon="mif-barcode" />
                  <RibbonIconButton caption="هشدار" icon="mif-bell" />
                  <RibbonIconButton caption="مم" icon="mif-cast" />
                  <RibbonIconButton
                    caption="ماشین حساب"
                    icon="mif-calculator2"
                  />
                </RibbonButtonGroup>

                <RibbonButtonGroup style={{ width: "100px" }}>
                  <RibbonIconButton
                    caption="Italic"
                    icon="mif-italic"
                    title="Set italic text"
                  />
                  <RibbonIconButton caption="Bold" icon="mif-bold" />
                  <RibbonIconButton caption="Underline" icon="mif-underline" />
                </RibbonButtonGroup>

                <RibbonButtonGroup
                  active={[1, 3]}
                  style={{
                    width: "74px",
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "center",
                  }}
                >
                  <RibbonToolButton
                    caption="Italic"
                    icon="mif-italic"
                    title="Set italic text"
                  />
                  <RibbonToolButton caption="Bold" icon="mif-bold" />
                  <RibbonToolButton
                    caption="Underline"
                    icon="mif-underline"
                    hotkey="ctrl+h"
                  />
                </RibbonButtonGroup>
              </RibbonTabGroup>
            </RibbonTab>
            <RibbonTab label="مالی">
              <p>دکمه ها و امکانات بخش مالی</p>
            </RibbonTab>
            <RibbonTab label="گزارشات">
				<p>بخش گزارشات</p>
			</RibbonTab>
          </RibbonMenu>
		  <Table columns={columns} dataSource={data} onChange={onChange} />
        </Content>
        <Footer />
      </Layout>
    </Providers>
  );
}

export default App;

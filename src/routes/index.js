import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import PreRegisterAgent from '../pages/Authentication/PreRegister/customRoute';

  // Dashboard
import Dashboard from "../pages/Dashboard/index";

//TODO
import GameManagement from "../pages/GameManagement";
//this part is for UGS pages
import CurrencyManagement from "../pages/CurrencyManagement/index";

import languageMgnt from "../pages/LanguageMgnt/index";

import menuMgnt from "../pages/MenuManagement/index";
import ipWhiteList from "../pages/IPWhiteList/index";
import VendorManagement from "pages/VendorManagement/customRoute";
import UserManagerment from '../pages/UserManagement/index'
import PlayerManagement from "../pages/PlayerManagement";
import roleManagement from "../pages/RoleManagement/index";
import AgentManagement from "../pages/AgentManagement/index";
import BasicSetting from '../pages/BasicSetting';
import AgentTask from '../pages/AgentTask/index';
import AgentPreRegister from '../pages/AgentPreRegister/index';

import OverallAgentPerformanceReport from "../pages/Report/OverallAgentPerformance/index";
import GameProviderPerformanceReport from "../pages/Report/GameProviderPerformance/index";
import FundTransferReport from "../pages/Report/FundTransfer/index";
import EndBalanceReport from "../pages/Report/EndBalance/index";
import BetHistoryReport from "../pages/Report/BetHistory/index";
import BalanceLogReport from "../pages/Report/BalanceLog/index";
import DailyBetHistoryReport from "../pages/Report/DailyBetHistory/index";
import SeniorAgentReport from "../pages/Report/SeniorAgentReport/index";
import RevenueSummary from "../pages/Report/RevenueSummary/index";

import totalGame from "../pages/Report/TotalGame/index";
import ViewInfoTable from "../pages/Report/TotalGame/viewInfo";

import LoginLog from '../pages/LoginLog/index'
import OperationLog from '../pages/OperationLog/index'
import GameTypeManagement from "pages/GameManagement/gametype";

import ApiRequestLog from '../pages/ApiRequestLog'
import BrandAuthLog from '../pages/BrandAuthLog'
import PlayerAuthLog from '../pages/PlayerAuthLog'
import GameApiRequestLog from '../pages/GameApiRequestLog'
import AgentApiRequestLogs from '../pages/AgentApiRequestLogs'
import DeployAgentLogs from '../pages/DeployAgentLogs'
import AgentConfig from "pages/AgentConfig";
import AgentApiRecallLogs from "pages/AgentApiRecallLogs";
import TuronverAPIFailureLogs from 'pages/TurnoverApiFailureLog';

import DatabaseManager from "pages/DatabaseManagement/DatabaseManager";
import ScriptList from "pages/DatabaseManagement/ScriptManager/ScriptList";
import DeployScript from "pages/DatabaseManagement/ScriptManager/DeployScript";
import AgentDBManager from "pages/DatabaseManagement/AgentDBManager";

import AgentInvoice from "pages/InvoiceManagement/Agent";
import InvoiceSettlement from "pages/InvoiceManagement/InvoiceSettlement";

import LobbyManagement from "../pages/LobbyManagement/index";
import BetReplenishment from "pages/BetReplenishment";
import BetDetailsPage from "pages/Report/BetHistory/BetDetailsPage";
import SGQPCenter from "pages/SGQPCenter/index";
import YunYouPlayerList from "pages/YunYouManagement/YunYouPlayerList";
import YunYouPlayerControl from "pages/YunYouManagement/YunYouPlayerControl";
import YunYouChannelControl from "pages/YunYouManagement/YunYouChannelControl";
import QiPaiCanShu from "pages/YunYouManagement/QiPaiCanShu";
import YunYouStockManagement from "pages/YunYouManagement/YunYouStockManagement";
import YunYouEventManagement from "pages/YunYouManagement/YunYouEventManagement";
import AddEditForm from "pages/YunYouManagement/YunYouEventManagement/addedit";
import YunYouBetHistory from "pages/YunYouManagement/YunYouBetHistory";
import YunYouPlayerLog from "pages/YunYouManagement/YunYouPlayerLog";
import YunYouAgent from "pages/YunYouManagement/YunYouAgent";
import YunYouGameManagement from "pages/YunYouManagement/YunYouGameManagement";
import YunYouDataSummary from "pages/YunYouManagement/YunYouDataSummary";
import YunYouPlacementReport from "pages/YunYouManagement/YunYouPlacementReport";

const authProtectedRoutes = [

	{ path: "/home", component: Dashboard },

	//this part is for UGS pages
	{ path : "/currency-management", component : CurrencyManagement },
	{ path: "/languageMgnt", component: languageMgnt },
	{ path: "/vendorManagement",component:VendorManagement},
	{ path : "/menuMgnt", component : menuMgnt },	
	{ path: "/roleManagement", component: roleManagement },
	{ path: "/ipWhiteList", component: ipWhiteList },
	{ path: "/report/overallagentperformance", component : OverallAgentPerformanceReport },
	{ path: "/report/gameproviderperformance", component : GameProviderPerformanceReport },
	{ path: "/report/fundtransfer", component : FundTransferReport },
	{ path: "/report/endbalance", component : EndBalanceReport },
	{ path: "/report/bethistory/:id", component : BetDetailsPage, hideLayout : true },
	{ path: "/report/bethistory", component : BetHistoryReport },
	{ path: "/report/balancelog", component : BalanceLogReport },
	{ path: "/report/bethistorysummary", component : DailyBetHistoryReport },
	{ path: "/report/totalGame", component : totalGame },
	{ path: "/report/viewInfoTable", component : ViewInfoTable },
	{ path: "/report/senioragentreport", component : SeniorAgentReport },
	{ path: "/report/revenuesummary", component : RevenueSummary },

	//Game
	{ path: "/game-management", component: GameManagement },
	{ path: "/gametype-management", component: GameTypeManagement },

	//Player
	{ path: "/playerManagement", component: PlayerManagement },
	{ path: "/userManagement", component: UserManagerment },
	{ path: "/betReplenishment", component: BetReplenishment },

	//Log
	{ path: "/loginLog", component: LoginLog },
	{ path: "/operationLog", component: OperationLog },
	{ path: "/apiRequestLog", component: ApiRequestLog },
	{ path: "/brandAuthLog", component: BrandAuthLog },
	{ path: "/playerAuthLog", component: PlayerAuthLog },
	{ path: "/GameApiRequestLog", component: GameApiRequestLog },
	{ path: "/agentApiRequestLogs", component: AgentApiRequestLogs },
	{ path: "/deployAgentLogs", component: DeployAgentLogs },
	{ path: "/agentApiRecallLogs", component: AgentApiRecallLogs },
	{ path: "/turnoverApiFailureLog", component: TuronverAPIFailureLogs },

	//Agent
	{ path: "/agent-management", component: AgentManagement },
	{ path: "/agent-config", component: AgentConfig },
	{ path: "/Lobby-management", component: LobbyManagement },
	
	
	//Basic Setting
	{ path: "/basic-setting", component: BasicSetting },

	//Agent Task
	{ path: "/agent-task", component: AgentTask },
	
	//Agent Pre-Register
	{ path: "/agent-preregister", component: AgentPreRegister },
	
	//SGQP Notify Setting
	{ path: "/sgqpcenter", component: SGQPCenter },

	// Database
	{ path: "/dbmanager", component: DatabaseManager },
	{ path: "/scriptlist", component: ScriptList },
	{ path: "/dscript", component : DeployScript },
	{ path: "/agdbmanager", component: AgentDBManager },

	// Invoice
	{ path:"/invoice/agent", component : AgentInvoice},
	{ path:"/invoice/invoiceSettlement", component : InvoiceSettlement},

	// Yun You Management
	{ path:"/yy/playerList", component : YunYouPlayerList},
	{ path:"/yy/playerControl", component : YunYouPlayerControl},
	{ path:"/yy/channelControl", component : YunYouChannelControl},
	{ path:"/yy/qiPaiCanShu", component : QiPaiCanShu},
	{ path:"/yy/stockManagement", component : YunYouStockManagement},
	{ path:"/yy/eventManagement", component : YunYouEventManagement},
	{ path:"/eventManagement/addeditform", component: AddEditForm },
	{ path:"/yy/bethistory", component : YunYouBetHistory},
	{ path:"/yy/playerlog", component : YunYouPlayerLog},
	{ path:"/yy/agent", component : YunYouAgent},
	{ path:"/yy/gameManagement", component : YunYouGameManagement},
	{ path:"/yy/dataSummary", component : YunYouDataSummary},
	{ path:"/yy/placementReport", component : YunYouPlacementReport},



	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/home" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: ["/register", "/trial-game"], component : PreRegisterAgent},
];

export { authProtectedRoutes, publicRoutes };

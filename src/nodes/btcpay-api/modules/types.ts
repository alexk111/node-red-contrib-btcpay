import { Node, NodeDef } from "node-red";
import { BtcpayApiOptions } from "../shared/types";

export interface BtcpayApiNodeDef extends NodeDef, BtcpayApiOptions {}

// export interface BtcpayApiNode extends Node {}
export type BtcpayApiNode = Node;

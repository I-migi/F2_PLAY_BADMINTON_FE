import type { components } from "@/schemas/schema";

export type GetMatchesResponse =
  components["schemas"]["CommonResponseBracketResponse"];

export type GetMatchesData = components["schemas"]["BracketResponse"];

export type MatchParticipant = components["schemas"]["Participant"];
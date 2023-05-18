import {
     GETTING_ALL_SUBMISSIONS,
     FAILED_GETTING_SUBMISSIONS,
     CURRENT_SUBMISSIONS_FETCHED,
     GETTING_ALL_USER_SUBMISSIONS,
     FAILED_GETTING_USER_SUBMISSIONS,
     GET_SUBMISSION_BY_ID,
     CLEAR_SUBMISSION_BY_ID,
} from "../types";

export default function submission_reducer(state = {}, action) {
     switch (action.type) {
          case GETTING_ALL_SUBMISSIONS:
               return {
                    ...state,
                    gettingAllSubmissions: true,
                    failedGettingAllSubmissions: false,
               };
          case CURRENT_SUBMISSIONS_FETCHED:
               return {
                    ...state,
                    gettingAllSubmissions: false,
                    failedGettingAllSubmissions: false,
                    allCurrentSubmissions: action.payload,
               };
          case FAILED_GETTING_SUBMISSIONS:
               return {
                    ...state,
                    gettingAllSubmissions: true,
                    failedGettingAllSubmissions: false,
               };
          case GETTING_ALL_USER_SUBMISSIONS:
               return {
                    ...state,
                    gettingAllUserSubmissions: true,
                    failedGettingAllUserSubmissions: false,
               };
          case GET_SUBMISSION_BY_ID:
               return {
                    ...state,
                    gettingAllUserSubmissions: false,
                    failedGettingAllUserSubmissions: false,
                    submissionById: action.payload,
               };
          case FAILED_GETTING_USER_SUBMISSIONS:
               return {
                    ...state,
                    gettingAllUserSubmissions: true,
                    failedGettingAllUserSubmissions: false,
               };
          case CLEAR_SUBMISSION_BY_ID:
               return {
                    ...state,
                    submissionById: null,
               };
          default:
               return state;
     }
}

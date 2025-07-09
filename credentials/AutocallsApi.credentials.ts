import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AutocallsApi implements ICredentialType {
	name = 'autocallsApi';
	displayName = 'Autocalls API';
	documentationUrl = 'https://app.autocalls.ai/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Create an API key in your Autocalls account and paste the value here. Get API key here -> https://app.autocalls.ai/api-keys',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.autocalls.ai',
			url: '/api/user/me',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		},
	};
}
